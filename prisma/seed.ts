import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.bookmark.create({
    data: {
      description: 'description test',
      image: 'image test',
      title: 'title test',
      url: 'url test',
      userId: 'uuid test',
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
