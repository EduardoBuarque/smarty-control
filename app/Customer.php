<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = ['name', 'phone', 'address', 'city_id'];

    protected $with = ['city'];

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
