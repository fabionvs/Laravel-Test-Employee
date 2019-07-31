<?php

namespace Tests\Feature;

use Faker\Provider\DateTime;
use Illuminate\Support\Facades\Date;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EmployeeTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testPostEmployeeTest()
    {
        $this->artisan('migrate:fresh', [
            '--seed' => true,
        ]);
        $credentials = array(
            'name' => 'fabio',
            'last_name' => 'teste',
            "age" => 25,
            "salary" => 2.500,
            "created_at" => '2017-03-31 09:30:20'
        );
        $response = $this->post('/api/employee', $credentials);
        $response->assertStatus(201);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testPutEmployeeTest()
    {
        $this->artisan('migrate:fresh', [
            '--seed' => true,
        ]);
        $credentials = array(
            'name' => 'fabio',
            'last_name' => 'teste',
            "age" => 25,
            "salary" => 2.500,
            "created_at" => '2017-03-31 09:30:20'
        );
        $response = $this->put('/api/employee/1', $credentials);

        $response->assertStatus(200);
    }

    /**
     * Teste de delete
     *
     * @return void
     */
    public function testDeletePedidoTest()
    {
        $this->artisan('migrate:fresh', [
            '--seed' => true,
        ]);
        $response = $this->delete('/api/employee/1');
        $response->assertStatus(200);
    }

}
