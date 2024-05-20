import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// initialize Prisma Client

const prisma = new PrismaClient();

export function createRandomClub() {
  return {
    name: faker.internet.userName(),
    address: faker.location.streetAddress(),
    zipCode: faker.location.zipCode(),
    city: faker.location.city(),
    phone: faker.phone.number(),
  };
}

async function main() {
  const district1 = await prisma.district.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'District de Provence',
    },
  });

  const district2 = await prisma.district.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'District Méditérannée',
    },
  });

  const clubs = faker.helpers.multiple(createRandomClub, {
    count: 10,
  });

  const club = [];
  for (let index = 0; index < clubs.length; index++) {
    const element = clubs[index];
    const clubTemp = await prisma.club.upsert({
      where: { id: index + 1 },
      update: {},
      create: {
        name: element.name,
        address: element.address,
        zipCode: element.zipCode,
        city: element.city,
        phone: element.phone,
        districtId: index % 2 === 0 ? 1 : 2,
      },
    });
    club.push(clubTemp);
  }

  console.log({ district1, district2, club });
}

// execute the main function

main()
  .catch((e) => {
    console.error(e);

    process.exit(1);
  })

  .finally(async () => {
    // close Prisma Client at the end

    await prisma.$disconnect();
  });
