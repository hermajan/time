package time.year;

import static org.junit.Assert.*;
import org.junit.Test;

/**
 * Tests for the YearTest class.
 */
public class YearTest {
	/**
	 * Test of leapYear method, of class Year.
	 */
	@Test
	public void testLeapYear() {
		System.out.println("leapYear");
		assertEquals(false, Year.leapYear(1900));
        assertEquals(true, Year.leapYear(2000));
        assertEquals(true, Year.leapYear(2012));
        assertEquals(false, Year.leapYear(2014));
	}

	/**
	 * Test of leapYear2 method, of class Year.
	 */
	@Test
	public void testLeapYear2() {
		System.out.println("leapYear2");
		assertEquals(false, Year.leapYear2(1900));
        assertEquals(true, Year.leapYear2(2000));
        assertEquals(true, Year.leapYear2(2012));
        assertEquals(false, Year.leapYear2(2014));
	}
}
