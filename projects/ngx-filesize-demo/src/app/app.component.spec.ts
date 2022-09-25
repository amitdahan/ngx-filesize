import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxFilesizeModule } from 'ngx-filesize';
import * as filesize from 'filesize';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgxFilesizeModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use filesize pipe', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.filesize')?.textContent).toBe(
      filesize(123456789)
    );
  });
});
