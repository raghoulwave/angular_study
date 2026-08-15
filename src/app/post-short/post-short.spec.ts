import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShort } from './post-short';

describe('PostShort', () => {
  let component: PostShort;
  let fixture: ComponentFixture<PostShort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostShort],
    }).compileComponents();

    fixture = TestBed.createComponent(PostShort);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
