enum MessageTypes {
  error = 'text-danger',
  warning = 'text-warning',
  success = 'text-success',
  default = 'text-light'
}

export function addNewDefaultMessage(message: string): void {
  addNewMessage(message, MessageTypes.default);
}

export function addNewWarningMessage(message: string): void {
  addNewMessage(message, MessageTypes.warning);
}

export function addNewSuccessMessage(message: string): void {
  addNewMessage(message, MessageTypes.success);
}

export function addNewErrorMessage(message: string): void {
  addNewMessage(message, MessageTypes.error);
}

export function cleanReports() {
  const node = document.getElementById('messageBox');
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
}

function addNewMessage(message: string, messageType: MessageTypes): void {
  const p = document.createElement('p');
  p.className = `${messageType}`;
  p.innerHTML = `${message}`;
  const messageBox = document.getElementById('messageBox');
  messageBox.appendChild(p);
  messageBox.scrollTop = messageBox.scrollHeight;
}
