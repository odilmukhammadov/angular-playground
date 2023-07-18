import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { TruncatePipe } from '../shared/truncate.pipe';

@Component({
  selector: 'app-feature-pipe',
  template: `
    <section>
      <h1>Pipes</h1>
      <p>{{ truncateViaTemplateBinding | truncate : 9 }}</p>
      <p>{{ truncateViaInjectedPipe }}</p>
      <p>{{ truncateViaInjectPipe }}</p>
      <p>{{ truncateViaStandalonePipe | truncateStandalone : 7 }}</p>
    </section>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePipeComponent implements OnInit {
  readonly truncateViaTemplateBinding = 'This string uses the truncate pipe through template binding.';

  truncateViaInjectedPipe = 'This string uses the truncate pipe through DI.';
  truncateViaInjectPipe = 'This string uses the truncate pipe injected using the inject() method.';
  truncateViaStandalonePipe = 'This string uses a standalone truncate pipe.';

  constructor(private readonly truncatePipe: TruncatePipe) {
    const truncateTempPipe = inject(TruncatePipe);
    this.truncateViaInjectPipe = truncateTempPipe.transform(this.truncateViaInjectPipe, 11);

    // Results in true, cuz they are the same instance loaded by the same injector.
    console.log(this.truncatePipe === truncateTempPipe);
  }

  ngOnInit(): void {
    this.truncateViaInjectedPipe = this.truncatePipe.transform(this.truncateViaInjectedPipe, 8);
  }
}
