<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostCreateRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends GeneralController
{
    public function __construct(Post $model)
    {
        parent::__construct($model);
    }
    public function index()
    {
        $posts = Post::with('category')
            ->when(request('category'), function ($q) {
                $q->where('category_id', request('category'));
            })->orderBy('id','desc')
            ->paginate(10);
        return PostResource::collection($posts);
    }

    public function store(PostCreateRequest $request)
    {
        $data = $request->validated();
        if ($request->image) {
            if ($request->hasFile('image')) {
                $data['image'] = $this->uploadImage($request->file('image'),'users' );
            }
        }
        $post= Post::create($data);
       sleep(2);
        return new  PostResource($post);
    }

    public function show(Post $post){

        return new PostResource($post);

    }
    public function update(Post $post,PostCreateRequest $request)
    {

        $data = $request->validated();
        if ($request->image) {
            if ($request->hasFile('image')) {
                $data['image'] = $this->uploadImage($request->file('image'),'users',$post->image );
            }
        }
        $post->update($data);
//        sleep(2);
        return new  PostResource($post);
    }
}
