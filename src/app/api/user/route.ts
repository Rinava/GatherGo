import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export default async function USER(req: NextRequest) {
  //   const { name, email } = req.body;
  const name = 'test';
  const email = 'dsadsa@gmail.com';
  const user = await prisma.user.create({
    data: {
      name,
      email,
      groups: {},
      groupsIDs: [],
      activitites: {},
    },
  });
  console.log(user);
  return new NextResponse(JSON.stringify(user));
}
