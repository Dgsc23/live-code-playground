/**
 * Live Code Playground - Core Functions
 * Production code - Sanitized version
 * @author Dr. David Gramling, PhD
 * @license Proprietary
 */

function updatePreview() {
    const html = htmlEditor.getValue();
    const css = cssEditor.getValue();
    const js = jsEditor.getValue();

    const src = `
    <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
    </html>
    `;
    const iframe = document.getElementById('preview-pane');
    iframe.srcdoc = src;
}

function downloadHTML() {
    const html = htmlEditor.getValue();
    const css = cssEditor.getValue();
    const js = jsEditor.getValue();

    const src = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>${css}</style>
    </head>
    <body>
        ${html}
        <script>${js}<\/script>
    </body>
    </html>`;
    const blob = new Blob([src], {type: 'text/html'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'code-playground.html';
    a.click();
}
