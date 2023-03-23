import {
  AfterViewInit,
  Component,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('swagger') swaggerDom: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    SwaggerUIBundle({
      urls: [
        {
          name: 'Test',
          url: 'https://petstore.swagger.io/v2/swagger.json',
        },
        {
          name: 'iProcess',
          url: 'http://10.0.1.104:8771/iprocess/v3/api-docs/swagger-config',
        },
      ],
      domNode: this.swaggerDom.nativeElement,
      deepLinking: true,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      layout: 'StandaloneLayout',
    });
  }
}
