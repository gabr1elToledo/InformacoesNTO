import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotSetup } from './bot-setup';

describe('BotSetup', () => {
  let component: BotSetup;
  let fixture: ComponentFixture<BotSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotSetup],
    }).compileComponents();

    fixture = TestBed.createComponent(BotSetup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
