<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Bookable;

class BookableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Bookable::factory(100)->create(); 
        
    }
}