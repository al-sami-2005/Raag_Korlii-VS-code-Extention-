<div align="center">
  <img src="media/icon.png" width="150" alt="Raag Korla Logo" />
  <h1>Raag Korla</h1>
  <p><strong>Instant Audio Alerts for Code Errors</strong></p>
</div>

---

**Raag Korla** is a powerful productivity extension for Visual Studio Code that provides an instant, customizable sound alert whenever a syntax error or warning is detected in your code. Catch mistakes as they happen without having to manually check the "Problems" panel!

## Features

- **Universal Support**: Works seamlessly across *any* programming language (TypeScript, Python, C++, Java, etc.) — as long as there is a linter or language server providing diagnostics!
- **Zero Config Required**: Works out of the box with a default alert beep.
- **Customizable Audio**: Easily plug in your own custom sound files (`.mp3` or `.wav`) via the extension settings.
- **Smart Debouncing**: Prevents audio spam during massive refactoring or full-project analysis.

## Extension Settings

This extension contributes the following settings:

* `raagKorla.enabled`: Enable/disable this extension (Default: `true`).
* `raagKorla.soundPath`: The absolute path to a custom `.mp3` or `.wav` file you want to use for the error sound. If left blank, the default alert sound is used.

## Commands

* **`Raag Korla: Test Error Sound`**: Trigger this command via the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) to verify your volume and test your custom sound file.

## Requirements

No extra requirements or dependencies needed. Just install and code!

## Custom Sounds

*You can provide your own custom sound by opening your VS Code settings, searching for "Raag Korla", and pasting the absolute path to your audio file.*

---
**Enjoy error-free coding!**

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
