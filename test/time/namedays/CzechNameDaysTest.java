package time.namedays;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

/**
 * Tests for the CzechNameDaysTest class.
 * @author DJohnny
 */
public class CzechNameDaysTest {
    /**
     * Test of nameDay method, of class CzechNameDays.
     */
    @Test
    public void testNameDay() {
        System.out.println("nameDay");
        assertEquals("Jan", CzechNameDays.nameDay(24, 6));
        assertEquals("Horymír", CzechNameDays.nameDay(29, 2));
    }

}