export function getLanguage(url: string)
{
  return url.split('/')[3] || 'pt';
}

export function getPath(url: string)
{
  return url.split('/')[4];
}
