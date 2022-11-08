<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return $posts = PostResource::collection(Post::get());
    }

    public function store(PostRequest $request)
    {

        $post=Post::create($request->validated());

        return $this->respondWithSuccess(trans('message.added_successfully'), [
            'post' => new PostResource($post),
        ]);
    }
}
