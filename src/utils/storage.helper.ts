export function getItem(key: string) {
  return localStorage.getItem(key);
}

export function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
  return window.dispatchEvent(new Event(key));
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
  return window.dispatchEvent(new Event(key));
}
