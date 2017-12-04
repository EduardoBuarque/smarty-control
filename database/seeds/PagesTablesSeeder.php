<?php

use App\Page;
use Illuminate\Database\Seeder;

class PagesTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Page::create(['name' => 'Home', 'router' => '/']);
        Page::create(['name' => 'Pedido', 'router' => '/orders']);
        Page::create(['name' => 'Lista de Pedidos', 'router' => '/listOrder']);
        Page::create(['name' => 'Clientes', 'router' => '/customers']);
        Page::create(['name' => 'Usuários', 'router' => '/users']);
        Page::create(['name' => 'Produtos e Categorias', 'router' => '/products_categories']);
        Page::create(['name' => 'Configuracões', 'router' => '/config']);
    }
}
