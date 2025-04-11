export const mockMicrosoftProducts = [
    {
        name: "Microsoft 365 Business Basic",
        sku: "MS-BIZ-BASIC",
        billingCycle: {
            monthly: 19.99,
            annual: 185.00,
            threeYear: 310.00
        },
        term: ['monthly', 'annual', '3-year'],
        segment: "Corporate"
    },
    {
        name: "Microsoft 365 Business Standard",
        sku: "MS-BIZ-STD",
        billingCycle: {
            monthly: 12.99,
            annual: 130.00,
            threeYear: 360.00
        },
        term: ['monthly', 'annual', '3-year'],
        segment: "Education"
    },
    {
        name: "Microsoft Defender for Endpoint",
        sku: "MS-DEF-ENDPOINT",
        billingCycle: {
            monthly: 20.99,
            annual: 140.00,
            threeYear: 340.00
        },
        term: ['monthly', 'annual', '3-year'],
        segment: "Charity"
    }
];