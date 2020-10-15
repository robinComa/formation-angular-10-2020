import { FirstWordBoldDirective } from './first-word-bold.directive';

describe('FirstWordBoldDirective', () => {
  it('should create an instance', () => {
    const directive = new FirstWordBoldDirective({
      nativeElement: {
        style: {
          fontWeight: ''
        }
      }
    } as any);
    expect(directive).toBeTruthy();
  });
});
