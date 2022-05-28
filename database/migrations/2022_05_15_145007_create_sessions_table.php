<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('hall_id');
            $table->foreign('hall_id')->references('id')->on('halls')->onDelete('cascade');
            $table->integer('film_id');
            $table->foreign('film_id')->references('id')->on('films')->onDelete('cascade');
            $table->integer('duraton_session');
            $table->integer('start_session');
            $table->integer('finish_session');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
};
