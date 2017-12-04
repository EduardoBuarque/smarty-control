<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public $timestamps = false;

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function pages()
    {
        return $this->belongsToMany(Page::class);
    }
}
