import { execFileSync } from 'node:child_process';

/** datePublished/dateModified aus der Git-Historie einer Datei; ohne Historie das Build-Datum. */
export function gitDates(file: string) {
  const run = (args: string[]) => {
    try { return execFileSync('git', ['log', ...args, '--format=%cI', '--', file], { encoding: 'utf8' }).trim().split('\n').filter(Boolean); }
    catch { return []; }
  };
  const all = run([]);
  const now = new Date().toISOString();
  return { published: all[all.length - 1] || now, modified: all[0] || now };
}

export const deDatum = (iso: string) =>
  new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Berlin' }).format(new Date(iso));
