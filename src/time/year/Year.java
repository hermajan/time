package time.year;

/**
 * Handling with a year.
 */
public class Year {
    /**
     * Checks if the year is leap.
     * @param year Input year.
     * @return True if the year is leap, false otherwise.
     */
    public static boolean leapYear(int year) {
        if((year%4)!=0) {
            return false;
        } else if((year%100)!=0) {
            return true;
        } else if((year%400)!=0) {
            return false;
        } else {
            return true;
        }
    }
	
	/**
     * Checks if the year is leap using Java library function.
     * @param year Input year.
     * @return True if the year is leap, false otherwise.
     */
    public static boolean leapYear2(int year) {
		return java.time.Year.isLeap(year);
	}
}
