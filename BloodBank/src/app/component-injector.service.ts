import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentInjectorService {
  viewRef: ViewContainerRef;
  constructor(private _resolver: ComponentFactoryResolver) { }

  setViewRef(viewCon: ViewContainerRef) {
    this.viewRef = viewCon;
  }

  addComponent(comToAdd: any) {
    const factory = this._resolver.resolveComponentFactory(comToAdd);
    const compRef = factory.create(this.viewRef.injector);
    this.viewRef.insert(compRef.hostView);
    return compRef.instance;
  }

  removeComponent(compToRemove: any) {
    //const factory = this._resolver.resolveComponentFactory(compToRemove);
    this.viewRef.remove();
  }

}


