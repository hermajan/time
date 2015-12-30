<?php
/**
 * Handling with time.
 */
namespace time;

class Time {
    /**
     * Returns date.
     * @return string Date in format <day>.<month>.<year>.
     */
    public function datePHP() { return date("d.m.Y"); } 
    
    /**
     * Returns time.
     * @return string Time in format <hour>:<minute>:<second>.
     */
    public function timePHP() { return date("H:i:s");}
}
?>
