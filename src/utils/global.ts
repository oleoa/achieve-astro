export function getLanguage(url: string)
{
  return url.split('/')[3] || 'pt';
}
