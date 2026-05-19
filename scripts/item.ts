import { GuideBookComponent } from "@lpsmods/mc-utils";
import { pages } from "./guide/main.js";
import { ItemComponentRegistry } from "@minecraft/server";

export function registerItemComponents(registry: ItemComponentRegistry): void {
  registry.registerCustomComponent("lpsm_lightning:guide_book", new GuideBookComponent(pages));
  GuideBookComponent.setup("lpsm_lightning:guide_book");
}
