<div align="center">
  <img src="https://raw.githubusercontent.com/al-sami-2005/Raag_Korlii-VS-code-Extention-/main/media/icon.png" width="160" alt="Raag Korla VS Code Extension Logo" style="border-radius: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); margin-bottom: 20px;" />
  
  <h1 style="border-bottom: none; margin-bottom: 10px;">🎵 Raag Korla</h1>
  <p style="font-size: 1.2em; color: #888;"><strong>Instant Audio Alerts for Code Errors in Visual Studio Code</strong></p>

  <div style="margin-top: 15px; margin-bottom: 30px;">
    <a href="https://marketplace.visualstudio.com/items?itemName=lazyehll.raag-korla">
      <img src="https://img.shields.io/visual-studio-marketplace/v/lazyehll.raag-korla?color=007ACC&label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="VS Code Marketplace Version" />
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=lazyehll.raag-korla">
      <img src="https://img.shields.io/visual-studio-marketplace/d/lazyehll.raag-korla?color=4CAF50&logo=visual-studio-code" alt="VS Code Marketplace Downloads" />
    </a>
    <a href="https://github.com/al-sami-2005/Raag_Korlii-VS-code-Extention-">
      <img src="https://img.shields.io/github/stars/al-sami-2005/Raag_Korlii-VS-code-Extention-?style=social" alt="GitHub Repo Stars" />
    </a>
  </div>
</div>

<hr style="border: 1px solid #333; margin: 40px 0;" />

<p style="line-height: 1.6; font-size: 1.1em;">
  <strong>Raag Korla</strong> is a lightweight, productivity-boosting VS Code extension that plays an instant audio alert whenever a syntax error or warning is detected in your code. Stop constantly checking the "Problems" panel and let your ears catch the mistakes as they happen in real-time.
</p>

<h2 style="margin-top: 40px;">✨ Features</h2>
<ul style="line-height: 1.8;">
  <li><strong>🌍 Universal Language Support:</strong> Works seamlessly across <em>any</em> programming language (TypeScript, Python, C++, Java, etc.) as long as there is an active linter or language server providing diagnostics.</li>
  <li><strong>⚡ Zero Configuration Needed:</strong> Works right out of the box with a default, non-intrusive alert sound.</li>
  <li><strong>🎛️ Fully Customizable Audio:</strong> Easily plug in your own custom <code>.mp3</code> or <code>.wav</code> files via the extension settings.</li>
  <li><strong>🛡️ Smart Debouncing:</strong> Built-in 1-second cooldown logic prevents audio spam during massive refactoring, pasting large code blocks, or full-project analysis.</li>
</ul>

<h2 style="margin-top: 40px;">🚀 Installation</h2>
<p>You can install this extension directly from the Visual Studio Code Marketplace.</p>
<ol style="line-height: 1.8;">
  <li>Open Visual Studio Code.</li>
  <li>Go to the <strong>Extensions</strong> view (<code>Ctrl+Shift+X</code> on Windows/Linux, <code>Cmd+Shift+X</code> on macOS).</li>
  <li>Search for <strong>Raag Korla</strong> (Publisher: <em>lazyehll</em>).</li>
  <li>Click <strong>Install</strong>.</li>
  <li>Reload VS Code if prompted.</li>
</ol>

<h2 style="margin-top: 40px;">⚙️ Extension Settings</h2>
<p>Customize your audio experience easily. Navigate to <code>Settings > Extensions > Raag Korla</code>.</p>

<table style="width: 100%; border-collapse: collapse; text-align: left; margin-top: 15px;">
  <thead>
    <tr style="background-color: #222; border-bottom: 2px solid #444;">
      <th style="padding: 12px;">Setting</th>
      <th style="padding: 12px;">Description</th>
      <th style="padding: 12px;">Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 12px;"><code>raagKorla.enabled</code></td>
      <td style="padding: 12px;">Enable or disable the audio alerts globally.</td>
      <td style="padding: 12px;"><code>true</code></td>
    </tr>
    <tr>
      <td style="padding: 12px;"><code>raagKorla.soundPath</code></td>
      <td style="padding: 12px;">The absolute file path to a custom <code>.mp3</code> or <code>.wav</code> file you want to use for the error sound.</td>
      <td style="padding: 12px;"><em>(Blank - uses default audio)</em></td>
    </tr>
  </tbody>
</table>

<h2 style="margin-top: 40px;">⌨️ Commands</h2>
<p>Trigger these commands via the VS Code Command Palette (<code>Ctrl+Shift+P</code> or <code>Cmd+Shift+P</code>):</p>
<ul style="line-height: 1.8;">
  <li><strong><code>Raag Korla: Test Error Sound</code></strong> - Plays the currently configured sound so you can verify your volume and ensure your custom audio path is working perfectly.</li>
</ul>

<hr style="border: 1px solid #333; margin: 50px 0 30px 0;" />

<div align="center" style="color: #888; font-style: italic; font-size: 0.9em;">
  <p>Built with copious amounts of caffeine, sheer spite for missing semicolons, and pure, unadulterated vibe coding. 😤</p>
</div>
