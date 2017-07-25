package ac.simons.bootiful_databases;

import org.jooq.DSLContext;
import org.jooq.SQLDialect;
import org.jooq.impl.DSL;
import org.jooq.tools.jdbc.MockConnection;
import org.jooq.tools.jdbc.MockDataProvider;
import org.jooq.tools.jdbc.MockResult;
import org.jooq.util.postgres.PostgresDataType;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ChartReportControllerTest {

    @Test
    public void getChartsShouldWork() throws Exception {

        // Create a Mock data provider for jOOQ
        final DSLContext create = DSL.using(SQLDialect.POSTGRES);
        final MockDataProvider mockDataProvider = ctx -> {
            final MockResult[] result = new MockResult[1];
            result[0] = new MockResult(0, create.newResult(
                    DSL.field("label", PostgresDataType.VARCHAR),
                    DSL.field("cnt", PostgresDataType.INTEGER),
                    DSL.field("changeInPosition", PostgresDataType.INTEGER)
            ));
            return result;
        };
        // The mock connectiong that is created with the above data provider
        final MockConnection connection = new MockConnection(mockDataProvider);

        // Instantiate the report controller.
        // This is not my favorite way of doing this.
        // I'd favor the @WebMvcTest annotation on tests, but using that
        // it get's kinda hard to mock the DSLContext, so I skipped that for this
        // example.
        final ChartReportController controller = new ChartReportController(DSL.using(connection, create.dialect()));

        final MockMvc mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
        mockMvc.perform(get("/api/charts/{year}/{month}", 2016, 11))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().json("{\n"
                        + "  \"fields\": [\n"
                        + "    {\n"
                        + "      \"name\": \"label\",\n"
                        + "      \"type\": \"VARCHAR\"\n"
                        + "    },\n"
                        + "    {\n"
                        + "      \"table\": \"current_month\",\n"
                        + "      \"name\": \"cnt\",\n"
                        + "      \"type\": \"INTEGER\"\n"
                        + "    },\n"
                        + "    {\n"
                        + "      \"name\": \"changeInPosition\",\n"
                        + "      \"type\": \"INTEGER\"\n"
                        + "    }\n"
                        + "  ], "
                        + "\"records\": []"
                        + "}"));

    }
}
