import { FileSizePipe } from './filesize.pipe';

describe('FileSizePipe', () => {
  const pipe = new FileSizePipe();

  it('transforms 1337', () => {
    expect(pipe.transform(1337)).toBe('1.31 KB');
  });

  it('transforms 1024', () => {
    expect(pipe.transform(1024)).toBe('1 KB');
  });
});
