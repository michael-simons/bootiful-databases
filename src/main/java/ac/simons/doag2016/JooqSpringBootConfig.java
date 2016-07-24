package ac.simons.doag2016;

import org.jooq.ConnectionProvider;
import org.jooq.ExecuteListenerProvider;
import org.jooq.SQLDialect;
import org.jooq.TransactionProvider;
import org.jooq.conf.RenderKeywordStyle;
import org.jooq.conf.RenderNameStyle;
import org.jooq.impl.DefaultConfiguration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JooqSpringBootConfig {

    @Bean
    public org.jooq.Configuration jooqConfig(
            final ConnectionProvider connectionProvider,
            final TransactionProvider transactionProvider,
            final ExecuteListenerProvider executeListenerProvider,            
            @Value("${jooq.renderFormatted:false}") final boolean renderFormatted
    ) {
        final DefaultConfiguration hlp = new DefaultConfiguration();
        return hlp
                .derive(hlp.settings()
                        .withRenderNameStyle(RenderNameStyle.LOWER)
                        .withRenderKeywordStyle(RenderKeywordStyle.UPPER)
                        .withRenderFormatted(renderFormatted)
                )
                .derive(connectionProvider)
                .derive(transactionProvider)
                .derive(executeListenerProvider)
                .derive(SQLDialect.ORACLE);
    }
}