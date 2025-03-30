import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasketButtonComponent } from './basket-button.component';
import { TranslateModule } from '@ngx-translate/core';

describe('BasketButtonComponent', () => {
  let component: BasketButtonComponent;
  let fixture: ComponentFixture<BasketButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketButtonComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
