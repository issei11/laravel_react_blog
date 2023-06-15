<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{
    public function index(Post $post)
    {
        return Inertia::render("Post/Index", ["posts" => $post->get()]);
    }

    public function show(Post $post)
    {
        return Inertia::render("Post/Show", ["post" => $post]);
    }

    public function create()
    {
        return Inertia::render("Post/Create");
    }

    public function store(PostRequest $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/post/".$post->id);
    }
}
