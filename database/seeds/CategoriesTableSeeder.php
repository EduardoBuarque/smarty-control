<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create(['name' => 'Refrigerantes']);
        Category::create(['name' => 'Pizzas']);
        Category::create(['name' => 'Hamburgers']);
        Category::create(['name' => 'Sucos']);
    }
}
