const LootDescriptions = {
    regen: 'An implant that increases healing rate.',
    sword: 'An implant that grafts a sword to your hands.',
    axe: 'An implant that grafts an axe to your hands.',
    hammer: 'An implant that grafts a hammer to your hands.',
    gun: 'An implant that grafts a gun to your hands.',
    claw: 'An implant that grafts claws to your hands.',
    revive: 'An implant that randomly revives you.',
    magnet: 'An implant that attracts money.',
};
export default LootDescriptions;

export const LootNames = Object.getOwnPropertyNames(LootDescriptions);

export const LongLootDescriptions = {
    regen: `
        Heal over time.  (Except when KO'd.)
    `,
    sword: `
        Randomly slash enemies with a sword.
    `,
    axe: `
        Randomly chop enemies with an axe.
    `,
    hammer: `
        Randomly crush enemies with a hammer.
    `,
    gun: `
        Randomly blast enemies with a gun.
    `,
    claw: `
        Randomly claw enemies.
    `,
    revive: `
        When knocked out, get a chance to auto-recover.
    `,
    magnet: `
        This magnetic implant attracts more cents to you.
    `,
}

