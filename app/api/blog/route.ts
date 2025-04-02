import { NextResponse } from 'next/server';

let blogs: Array<{
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
}> = [];

export async function GET() {
    return NextResponse.json(blogs);
}

export async function POST(req: Request) {
    try {
        const { image, title, description, category } = await req.json();

        if (!image || !title || !description || !category) {
            return NextResponse.json(
                { error: 'All fields (image, title, description, category) are required.' },
                { status: 400 }
            );
        }

        const newBlog = {
            id: blogs.length + 1,
            image,
            title,
            description,
            category,
        };

        blogs.push(newBlog);

        return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Blog ID is required.' }, { status: 400 });
    }

    const blogIndex = blogs.findIndex((blog) => blog.id === parseInt(id));

    if (blogIndex === -1) {
        return NextResponse.json({ error: 'Blog not found.' }, { status: 404 });
    }

    blogs.splice(blogIndex, 1);

    return NextResponse.json({ message: 'Blog deleted successfully.' });
}