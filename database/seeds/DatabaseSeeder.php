<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert([
            'name' => 'fabio',
            'last_name' => 'teste',
            "age" => 25,
            "salary" => 2.500,
            "created_at" => '2017-03-31 09:30:20'
        ]);
        DB::table('employees')->insert([
            'name' => 'fabio',
            'last_name' => 'teste',
            "age" => 25,
            "salary" => 2.500,
            "created_at" => '2017-03-31 09:30:20'
        ]);
    }
}
