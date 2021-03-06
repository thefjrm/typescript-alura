import { inspect } from "../decorators/inspect.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor) as HTMLElement;
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  @inspect
  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
    }
    this.elemento.innerHTML = template;
  }
}
