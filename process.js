// In the Node.js `child_process` module, there are several methods available to create and interact with child processes. Let's define each of these methods:

// 1. `fork`:
//    - The `fork` method is a convenience method to create a new Node.js process (child process) from a JavaScript module. It is specifically designed for communication between the parent process and the child process using inter-process communication (IPC).
//    - This method is commonly used when you need to parallelize tasks by creating multiple instances of a Node.js application and share data between them through IPC.
// const { fork } = require('child_process');
// const childProcess = fork('child_module.js');


// 2. `exec`:
//    - The `exec` method is used to create a new shell to execute a command. It is useful for running command-line tools or external shell commands from within a Node.js script.
//    - The `exec` method allows you to capture the stdout and stderr streams and handle the result or error of the command execution.
const { exec } = require('child_process');
exec('ls -l', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

// 3. `spawn`:
//    - The `spawn` method is used to launch a new process and asynchronously execute a command. It is similar to `exec`, but it does not use a shell to execute the command, making it more efficient for commands that do not require shell features.
//    - The `spawn` method allows you to capture the stdout and stderr streams and also listen for the `close` event to handle the termination of the child process.

const { spawn } = require('child_process');
    const ls = spawn('ls', ['-l']);
    ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    });
    ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    });
    ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});


// 4. `execFile`:
//    - The `execFile` method is similar to `spawn`, but it provides a more straightforward way to execute an external command without using a shell.
//    - Like `exec`, the `execFile` method allows you to capture the stdout and stderr streams and handle the result or error of the command execution.

// Each method in the `child_process` module has its specific use cases and benefits, allowing developers to choose the appropriate method based on their requirements for creating and interacting with child processes.

const { execFile } = require("child_process");
execFile("ls", ["-l"], (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});