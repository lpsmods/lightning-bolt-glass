import { Block, EntitySpawnAfterEvent, system, Vector3 } from "@minecraft/server";
import { EntityHandler } from "@lpsmods/mc-utils";

class LightningBoltHandler extends EntityHandler {
  depth = 6;
  canReplaceBlocks = [];

  constructor() {
    super({ type: "lightning_bolt" });
  }

  canReplace(block: Block): boolean {
    return this.canReplaceBlocks.includes(block.typeId) || block.hasTag("dirt") || block.hasTag("sand");
  }

  *placeFulgurite(origin: Vector3): Generator<void> {
    for (let y = 0; y < this.depth; y++) {
      const radius = Math.floor(1 + y / 2);
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          const dist = Math.sqrt(dx * dx + dz * dz);
          const chance = 1 - dist / (radius + 0.5);
          if (Math.random() < chance) {
            const block = origin.offset({ x: dx, y: -y, z: dz });
            if (!block || !this.canReplace(block)) continue;
            block.setType("glass");
          }
        }
      }
    }
  }

  onSpawn(event: EntitySpawnAfterEvent): void {
    const block = event.entity.dimension.getBlock(event.entity.location).below();
    if (!block || block.isAir) return;
    system.runJob(this.placeFulgurite(block));
  }
}

new LightningBoltHandler();
