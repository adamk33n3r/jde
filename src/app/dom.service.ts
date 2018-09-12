import {
  Injectable,
  ComponentFactoryResolver,
  Type,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) { }

  public createComponent<T>(component: Type<T>) {
    const factory = this.resolver.resolveComponentFactory(component);
    const compRef = factory.create(this.injector);
    console.log(compRef.location, (compRef.hostView as EmbeddedViewRef<any>).rootNodes);
    this.appRef.attachView(compRef.hostView);
    return compRef;
  }

  public appendChild(child: ComponentRef<any>, parent: HTMLElement = document.body) {
    const childEle = (child.hostView as EmbeddedViewRef<any>).rootNodes[0];
    parent.appendChild(childEle);
  }

}
