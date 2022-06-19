<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('category')
            ->when(request('category'),function ($q){
                $q->where('category_id',request('category'));
            })
            ->paginate(10);
        return PostResource::collection($posts);
    }
}
