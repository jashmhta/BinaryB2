import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Simple authentication - In production, use proper auth (NextAuth, etc.)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme';

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  
  const [type, credentials] = authHeader.split(' ');
  if (type !== 'Basic') return false;
  
  const decoded = Buffer.from(credentials, 'base64').toString();
  const [, password] = decoded.split(':');
  
  return password === ADMIN_PASSWORD;
}

// GET - Fetch all submissions
export async function GET(request: NextRequest) {
  // Skip auth check for now - add proper authentication in production
  // if (!checkAuth(request)) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

// PATCH - Update submission status
export async function PATCH(request: NextRequest) {
  // Skip auth check for now - add proper authentication in production
  // if (!checkAuth(request)) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing id or status' },
        { status: 400 }
      );
    }

    const validStatuses = ['new', 'read', 'replied', 'archived'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    const updated = await prisma.contactSubmission.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ submission: updated }, { status: 200 });
  } catch (error) {
    console.error('Failed to update submission:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a submission
export async function DELETE(request: NextRequest) {
  // Skip auth check for now - add proper authentication in production
  // if (!checkAuth(request)) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing id parameter' },
        { status: 400 }
      );
    }

    await prisma.contactSubmission.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'Submission deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to delete submission:', error);
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    );
  }
}
