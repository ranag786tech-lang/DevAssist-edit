var editor;

// ایڈیٹر کو لوڈ کرنا
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }});
require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: "// اپنا کوڈ یہاں لکھیں\nconsole.log('Hello World');",
        language: 'javascript',
        theme: 'vs-dark'
    });
});

// Run بٹن کا فنکشن
document.getElementById('runBtn').addEventListener('click', function() {
    const code = editor.getValue();
    try {
        eval(code);
    } catch (err) {
        console.error(err);
        alert("Error in code: " + err.message);
    }
});

// Save بٹن کا فنکشن
document.getElementById('saveBtn').addEventListener('click', function() {
    const code = editor.getValue();
    const blob = new Blob([code], { type: 'text/javascript' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'code.js';
    a.click();
});
