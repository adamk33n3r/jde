import { PaneModule } from './pane.module';

describe('PaneModule', () => {
  let paneModule: PaneModule;

  beforeEach(() => {
    paneModule = new PaneModule();
  });

  it('should create an instance', () => {
    expect(paneModule).toBeTruthy();
  });
});
