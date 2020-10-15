import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should manage empty string', () => {
    const pipe = new TruncatePipe();
    const value = pipe.transform(null);
    expect(value).toBe('');
  });

  it('should manage short string', () => {
    const pipe = new TruncatePipe();
    const value = pipe.transform('short text');
    expect(value).toBe('short text');
  });

  it('should manage long string', () => {
    const pipe = new TruncatePipe();
    const value = pipe.transform('long long long text');
    expect(value).toBe('long lo...');
  });

  it('should manage length paramater', () => {
    const pipe = new TruncatePipe();
    const value = pipe.transform('long long long text', 5);
    expect(value.length).toBe(5);
  });
});
