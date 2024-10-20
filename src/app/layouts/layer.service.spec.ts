import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';

describe('LayerService', () => {
  let layoutService: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutService]
    });
    layoutService = TestBed.inject(LayoutService);
  });

  it('creates a service', () => {
    expect(layoutService).toBeTruthy();
  });

  it('creates a zxcz', () => {
    console.log(layoutService.sizes)
    expect(layoutService.sizes).toEqual({
      'screen-x-small': false,
      'screen-small': false,
      'screen-medium': false,
      'screen-large': false
    });
  });
});
