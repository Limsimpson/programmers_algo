import java.util.Arrays;
class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        Arrays.sort(phone_book);
        int idx = 0;
        String def = phone_book[idx];
        for(int i = 1; i < phone_book.length; i ++) {
            if(idx != i && phone_book[i].contains(def)) {
                answer = false;
                break;
            }
            idx ++;
        }
        return answer;
    }
}