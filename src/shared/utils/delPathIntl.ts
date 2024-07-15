export function delPathIntl(path: string): string {
  return path.replace(/^\/[a-zA-Z]{2}\//, '/');
}
