package dev.lpsmods.lightning;

import dev.lpsmods.lightning.platform.Services;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.item.Items;

public class Bootstrap {
    public static void init() {
        Constants.LOG.info("Hello from Common init on {}! we are currently in a {} environment!", Services.PLATFORM.getPlatformName(), Services.PLATFORM.getEnvironmentName());
        Constants.LOG.info("The ID for diamonds is {}", BuiltInRegistries.ITEM.getKey(Items.DIAMOND));
        if (Services.PLATFORM.isModLoaded("examplemod")) {
            Constants.LOG.info("Hello to examplemod");
        }
    }
}