import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import playSound = require('play-sound');

const player = playSound({});

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "raag-korlii" is now active!');

	const errorCounts = new Map<string, number>();
	let lastPlayTime = 0;
	const COOLDOWN_MS = 1000; // Only play sound at most once per second

	const diagnosticDisposable = vscode.languages.onDidChangeDiagnostics(e => {
		const config = vscode.workspace.getConfiguration('raagKorlii');
		const isEnabled = config.get<boolean>('enabled', true);
		if (!isEnabled) {
			return;
		}

		let shouldPlaySound = false;

		for (const uri of e.uris) {
			const diagnostics = vscode.languages.getDiagnostics(uri);
			const errorCount = diagnostics.filter(d => d.severity === vscode.DiagnosticSeverity.Error).length;
			const previousCount = errorCounts.get(uri.toString()) || 0;

			if (errorCount > previousCount) {
				shouldPlaySound = true;
			}
			
			errorCounts.set(uri.toString(), errorCount);
		}

		if (shouldPlaySound) {
			const now = Date.now();
			if (now - lastPlayTime > COOLDOWN_MS) {
				playSoundEffect(context, config);
				lastPlayTime = now;
			}
		}
	});

	const testCommandDisposable = vscode.commands.registerCommand('raag-korlii.testSound', () => {
		const config = vscode.workspace.getConfiguration('raagKorlii');
		playSoundEffect(context, config);
		vscode.window.showInformationMessage('Raag Korlii: Playing test sound!');
	});

	context.subscriptions.push(diagnosticDisposable, testCommandDisposable);
}

function playSoundEffect(context: vscode.ExtensionContext, config: vscode.WorkspaceConfiguration) {
	let customSoundPath = config.get<string>('soundPath', '');
	let soundToPlay = customSoundPath;

	if (!soundToPlay || soundToPlay.trim() === '') {
		soundToPlay = context.asAbsolutePath(path.join('media', 'raag_korlii.mp3'));
	} else if (!fs.existsSync(soundToPlay)) {
		vscode.window.showErrorMessage(`Raag Korlii: Custom sound file not found at "${soundToPlay}". Falling back to default sound.`);
		soundToPlay = context.asAbsolutePath(path.join('media', 'raag_korlii.mp3'));
	}

	player.play(soundToPlay, (err: any) => {
		if (err) {
			console.error('Raag Korlii: Error playing sound', err);
			vscode.window.showErrorMessage('Raag Korlii: Failed to play sound. Please check your audio settings or sound file format.');
		}
	});
}

export function deactivate() {}
